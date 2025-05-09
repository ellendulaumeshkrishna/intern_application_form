from django.db import models
from django.utils.timezone import now

from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.
class RegisterForm(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE )
    name=models.CharField(max_length=100)
    email=models.EmailField(unique=True)
    phone_number=models.CharField(max_length=15)
    dob=models.DateField()
    gender = models.CharField(
        max_length=20,
        choices=[("Male", "Male"), ("Female", "Female"), ("Other", "Other"), ("Prefer not to say", "Prefer not to say")]
    )
    college_name=models.CharField(max_length=100)
    current_degree=models.CharField(
         max_length=100,
         choices=[("B.Tech", "B.Tech"), ("M.Tech", "M.Tech"), ("PhD", "PhD"), ("Other", "Other")])
    department=models.CharField(max_length=100)
    cgpa=models.FloatField()
    resume=models.FileField(upload_to="uploads/resumes/")
    lor=models.FileField(upload_to="uploads/lors/",blank=True,null=True)

    special_preference=models.TextField(blank=True,null=True)
    application_date = models.DateTimeField( default=now)

    def __str__(self):
        return self.name


class PreferenceForm(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    professor = models.CharField(max_length=100)
    first_choice = models.CharField(max_length=200)
    second_choice = models.CharField(max_length=200)
    third_choice = models.CharField(max_length=200)
    own_project_idea = models.TextField(blank=True, null=True)


class Project(models.Model):
    professor = models.ForeignKey('users.Professor', on_delete=models.CASCADE, related_name='projects')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.title} ({self.professor.name})"


