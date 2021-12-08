from storages.backends.s3boto3 import S3Boto3Storage


class StaticStorage(S3Boto3Storage):
    location = 'static'
    default_acl = 'private'


class MediaStore(S3Boto3Storage):
    location = 'media'
    file_overwrite = False