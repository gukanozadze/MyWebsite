from django.db import models

class Chart(models.Model):
    labelName = models.CharField(max_length=30)
    labelValue = models.CharField(max_length=10)

    def __str__(self):
        return self.labelName
