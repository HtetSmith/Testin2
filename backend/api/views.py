from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.views.generic import TemplateView, ListView, DetailView, CreateView, UpdateView, DeleteView

from django.views import View
from api.mixin import RoleRequiredMixin
from api.models import CustomUser
from .forms import CustomUserRegistrationForm
from django.urls import reverse, reverse_lazy
from django.contrib.auth.models import Group


class DashboardView(RoleRequiredMixin, TemplateView):
    
    template_name = 'dashboard.html'
    allowed_roles = ['Admin']  # Only users in these roles can access

class InstructorView(RoleRequiredMixin, TemplateView):
    template_name = 'Instructor_home_page.html'
    allowed_roles = ['Instructor']  # Only users in these roles can access

class HRDashboardView(RoleRequiredMixin, TemplateView):
    template_name = "Home_Page.html"
    allowed_roles = ['Student']


def custom_login_view(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Authenticate the user using email
        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            messages.error(request, "Invalid email or password. helow")
            return redirect('custom_login_view')
        # next_url = request.POST.get('next', None)  # Update from POST data
        # print(f"User: {user.username}, Password: {user.password},")
        user = authenticate(request, username=user.username, password=password)


        if user is not None:
            login(request, user)
            # Debugging print statement to log user information
            print(f"User: {user.username}, Role: {user.role}, Groups: {list(user.groups.values_list('name', flat=True))}")
            if user.role == 'admin':
                return redirect(reverse('admin_dashboard'))
            elif user.role == 'instructor':
                return redirect(reverse('instructor_dashboard'))
            elif user.role == 'student':
                return redirect(reverse('student_dashboard'))
            else:
                messages.error(request, "You do not have the required permissions.")
                return redirect('custom_login_view')
        else:
            messages.info(request, "Invalid email or password.")
            return render(request, 'Login.html', {'email': email})
        
    return render(request, 'Login.html')




class RegisterView(View):
    def get(self, request):
        user_form = CustomUserRegistrationForm()
        return render(request, 'register.html', {
            'user_form': user_form,
        })

    def post(self, request):
        user_form = CustomUserRegistrationForm(request.POST)

        if user_form.is_valid():
            print(user_form.errors)
            # Save user
            user = user_form.save(commit=False)
            if 'profile_picture' in request.FILES:
                print('found it')
                user.profile_picture = request.FILES['profile_picture']
            user.save()
            
            print(f"User: {user.username}, Role: {user.role}, Groups: {list(user.groups.values_list('name', flat=True))}")
            # Assign user to the corresponding group based on role
            # Assign user to group based on role
            role = user.role
            print(f"Attempting to assign group for role: {role}")  # Debugging log
            group, created = Group.objects.get_or_create(name=role.capitalize())
            print(f"Group fetched/created: {group}, Created: {created}")  # Debugging log
            user.groups.add(group)
            print(f"Groups after addition: {list(user.groups.values_list('name', flat=True))}")  # Debugging log
            print(f"User: {user.username}, Role: {user.role}, Groups: {list(user.groups.values_list('name', flat=True))}")

            messages.success(request, 'Your account has been created successfully!')
            return redirect('custom_login_view') 

        return render(request, 'register.html', {
            'user_form': user_form,
        })


def CustomLogoutView(request):
    logout(request)
    return redirect('custom_login_view')
# Classes for course function

