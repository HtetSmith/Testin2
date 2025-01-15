from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser

class CustomUserRegistrationForm(UserCreationForm):
    role = forms.ChoiceField(choices=CustomUser.ROLE_CHOICES, required=True)
    email = forms.EmailField(required=True,)

    class Meta:
        model = CustomUser
        fields = ['email', 'username', 'password1', 'password2', 'profile_picture', 'bio', 'role', 'country', 'city', 'phone', 'date_of_birth', 'gender']
        
        