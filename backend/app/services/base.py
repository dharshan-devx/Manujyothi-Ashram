from typing import Generic, TypeVar, Type
from app.repositories.base import BaseRepository

RepositoryType = TypeVar("RepositoryType", bound=BaseRepository)

class BaseService(Generic[RepositoryType]):
    def __init__(self, repository: RepositoryType):
        self.repository = repository
        
    # Business logic goes here
    def validate_data(self, data: any):
        pass
