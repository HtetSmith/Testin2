from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path , include
from api.views import custom_login_view, RegisterView, CustomLogoutView
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("api.urls")),
    path('login/', custom_login_view,name='custom_login_view'),

    path('register/',RegisterView.as_view(),name='register'),
    path('logout/', CustomLogoutView, name='logout'),

    path('reset_password/', auth_views.PasswordResetView.as_view(template_name="accounts/password_reset.html"), name="reset_password"),
    path('reset_password_sent/', auth_views.PasswordResetDoneView.as_view(template_name="accounts/password_reset_done.html"), name="password_reset_done"),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name="password_reset_confirm"),
    path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(template_name="accounts/password_reset_complete.html"), name="password_reset_complete")
]
