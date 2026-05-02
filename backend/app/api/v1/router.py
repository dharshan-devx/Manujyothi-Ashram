from fastapi import APIRouter

api_router = APIRouter()

# Example endpoint
@api_router.get("/health")
async def health_check():
    return {"status": "healthy"}
