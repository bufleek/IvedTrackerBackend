from typing import Any, Optional
from django.db import models
import random, string
from django.contrib.auth.models import AbstractUser, UserManager as DefaultUserManager


class UserManager(DefaultUserManager):
    def create_user(
        self, username: str, email=None, password=None, **extra_fields: Any
    ):
        return super().create_user(
            username,
            email=email,
            password=password,
            ived_id=self.get_random_id(),
            **extra_fields
        )

    @classmethod
    def get_random_id(cls):
        ived_id = random.choices(string.digits, k=6)
        try:
            cls.get(ived_id=ived_id)
            return cls.get_random_id()
        except:
            return "".join(ived_id)


class User(AbstractUser):
    image = models.ImageField(upload_to="profiles", blank=True, null=True)
    ived_id = models.CharField(max_length=25, null=False, blank=True, unique=True)

    objects = UserManager()
