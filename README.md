# FintechTop - Sistema de Ahorro Automatizado

## Tecnologías Utilizadas
- **Gateway**: Express.js
- **Microservicio**: NestJS
- **Bases de Datos**:
  - PostgreSQL (almacenamiento principal)
  - Firebase/Firestore (persistencia adicional)
- **Lenguajes**:
  - JavaScript (Gateway)
  - TypeScript (Microservicio)

## Estructura del Proyecto
El proyecto está dividido en dos componentes principales:

### Gateway (Express.js)
```
gateway/
├── src/
│   ├── controllers/     # Controladores para metas y depósitos
│   ├── routes/         # Definición de rutas API
│   ├── services/       # Servicios para comunicación con microservicio
│   ├── middlewares/    # Middlewares de Express
│   └── app.js         # Punto de entrada de la aplicación
```

### Microservicio (NestJS)
```
savings-service/
├── src/
│   ├── common/        # Interfaces compartidas
│   ├── config/        # Configuración de Firebase
│   ├── database/      # Módulo de base de datos
│   ├── deposits/      # Módulo de depósitos
│   │   ├── dto/      # Data Transfer Objects
│   │   └── entities/ # Entidades de base de datos
│   ├── goals/         # Módulo de metas
│   │   ├── dto/      # Data Transfer Objects
│   │   └── entities/ # Entidades de base de datos
│   └── main.ts       # Punto de entrada de la aplicación
```

## Configuración Inicial

### Gateway (Puerto 3000)
```bash
cd gateway
npm install
npm run dev
```

### Microservicio (Puerto 4000)
```bash
cd savings-service
npm install
npm run start:dev
```

### Base de Datos
PostgreSQL debe estar configurado con las siguientes tablas:
```sql
CREATE TABLE goals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255),
    target_amount DECIMAL(10,2),
    deadline DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE deposits (
    id SERIAL PRIMARY KEY,
    goal_id UUID NOT NULL,
    amount DECIMAL(10,2),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (goal_id) REFERENCES goals(id)
);
```

## Variables de Entorno Necesarias
```env
# Gateway (.env)
PORT=3000
MICROSERVICE_URL=http://localhost:4000

# Microservicio (.env)
PORT=4000
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
POSTGRES_DB=savings
FIREBASE_PROJECT_ID=your_project_id
```

Nota: Se requiere el archivo `firebase-credentials.json` en la raíz del microservicio para la conexión con Firebase.
