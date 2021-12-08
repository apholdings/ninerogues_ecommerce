from django.urls import path
from .views import GetShippingView

urlpatterns = [
    path('get-shipping-options', GetShippingView.as_view()),
]