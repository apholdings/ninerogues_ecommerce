from django.urls import path

from .views import ListCategoriesView

urlpatterns = [
    path('categories', ListCategoriesView.as_view()),
]