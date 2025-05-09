from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django_rest_passwordreset.signals import reset_password_token_created
from django.dispatch import receiver
from django.urls import reverse
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.utils.html import strip_tags
from django.conf import settings


class CustomUserManager(BaseUserManager):
    def create_user(self,email,password=None,**extra_fields):
        if not email:
            raise ValueError('Email is a requiredField')
        
        email=self.normalize_email(email)
        user=self.model(email=email, **extra_fields )
        user.set_password(password)
        user.save(using=self._db)
        return user        

    def create_superuser(self,email,password=None,**extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_superuser',True)
        return self.create_user(email, password , **extra_fields)


class CustomUser(AbstractUser):
    email = models.EmailField(max_length=200,unique=True)
    birthday=models.DateField(null=True,blank=True)
    username=models.CharField(max_length=200,null=True,blank=True)

    objects=CustomUserManager()

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]



class Emails(models.Model):
    subject=models.CharField(max_length=500)
    message=models.TextField(max_length=500)
    email=models.EmailField()
    created_at=models.DateTimeField(auto_now_add=True,blank=True,null=True)
    edited_at=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.id
    

@receiver(reset_password_token_created)
def password_reset_token_created(reset_password_token, *args, **kwargs):
    sitelink = "http://localhost:5173/"
    token = "{}".format(reset_password_token.key)
    full_link=str(sitelink)+str("password-reset/")+str(token)

    print(full_link)
    print(token)

    context={
        'full_link':full_link,
        'email_address':reset_password_token.user.email
    }

    html_message=render_to_string("backend/email.html",context=context)
    plain_message=strip_tags(html_message)

    msg=EmailMultiAlternatives(
        subject="request for resetting password for {title}".format(title=reset_password_token.user.email),
        body=plain_message,
        from_email="sender@example.com",
        to=[reset_password_token.user.email]
    )

    msg.attach_alternative(html_message, "text/html")
    msg.send()



class AreaOfInterest(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name



class Professor(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        limit_choices_to={'is_staff': True}
    )
    name = models.CharField(max_length=100)
    areas_of_interest = models.ManyToManyField(AreaOfInterest, related_name='professors')
    profile_url = models.URLField()

    def __str__(self):
        return self.name



