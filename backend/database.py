from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base


DATABASE_URL = "postgresql://postgres:admin123@localhost:5432/auth_db"  #database connection string for PostgreSQL database


engine = create_engine(DATABASE_URL) #connection between Python and PostgreSQL.


SessionLocal = sessionmaker( # db sessionmaker 
    autocommit=False,
    autoflush=False, #auto send off to db
    bind=engine
)


Base = declarative_base() #parent class for models


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

