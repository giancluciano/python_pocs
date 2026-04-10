FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        libpq-dev \
        curl \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

RUN addgroup --system django \
    && adduser --system --ingroup django django \
    && chown -R django:django /app
USER django

EXPOSE 8000

CMD ["gunicorn", "tax_system.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3"]
