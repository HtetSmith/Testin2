from django.db import models
# Create your models here.
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('student', 'Student'),
        ('instructor', 'Instructor'),
        ('admin', 'Admin'),
        ('staff', 'Staff'),

    )

    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='student')
    email = models.EmailField(unique=True, max_length=255)  # Email field with unique constraint
    password = models.CharField(max_length=128)  # Secure password storage (hashed passwords recommended)
    username = models.CharField(max_length=150, unique=True)  # Username with unique constraint
    profile_picture = models.ImageField(upload_to='profile_photos/', blank=True, null=True)  # Optional profile picture
    bio = models.TextField(blank=True, null=True)  # Optional biography

    # Additional fields
    country = models.CharField(max_length=100, blank=True, null=True)  # Country name
    city = models.CharField(max_length=100, blank=True, null=True)  # City name
    phone = models.CharField(max_length=15, blank=True, null=True)  # Phone number
    date_of_birth = models.DateField(blank=True, null=True)  # Date of birth
    gender = models.CharField(max_length=10, choices=[
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other')
    ], blank=True, null=True)  # Gender with predefined choices

    def __str__(self):
        return self.username  # String representation for the admin panel
    
