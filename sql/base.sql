CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS "drivers" (
  "id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4()),
  "name" varchar(128) NOT NULL,
  "team" uuid NOT NULL,
  "nationality" varchar(64),
  "description" text,
  "image" bytea
);

CREATE TABLE IF NOT EXISTS "teams" (
  "id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4()),
  "name" varchar(128) NOT NULL,
  "description" text,
  "car_description" text,
  "image" bytea
);

CREATE TABLE IF NOT EXISTS "users" (
  "id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4()),
  "name" varchar(128) NOT NULL,
  "username" varchar(128) UNIQUE NOT NULL,
  "pwd" text NOT NULL,
  "profile_picture" bytea,
  "bio" text,
  "points" smallint
);

CREATE TABLE IF NOT EXISTS "groups" (
  "id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4()),
  "name" varchar(128) NOT NULL,
  "description" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "user_belongs_to_group" (
  "user" uuid NOT NULL,
  "group" uuid NOT NULL,
  PRIMARY KEY ("user", "group")
);

CREATE TABLE IF NOT EXISTS "messages" (
  "id" bigserial PRIMARY KEY,
  "user" uuid NOT NULL,
  "content" text NOT NULL,
  "by_user" boolean NOT NULL
);

CREATE TABLE IF NOT EXISTS "historical" (
  "year" smallint NOT NULL,
  "circuit" uuid NOT NULL,
  "driver" uuid NOT NULL,
  "quali" smallint,
  "final" smallint
);

CREATE TABLE IF NOT EXISTS "circuits" (
  "id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4()),
  "name" varchar(128),
  "description" text,
  "country" varchar(64),
  "city" varchar(64),
  "image" bytea,
  "length" real
);

CREATE TABLE IF NOT EXISTS "next_results" (
  "circuit" uuid NOT NULL,
  "driver" uuid NOT NULL,
  "prediction" smallint
);

CREATE TABLE IF NOT EXISTS "predictions" (
  "id" uuid PRIMARY KEY DEFAULT (uuid_generate_v4()),
  "user" uuid NOT NULL,
  "circuit" uuid NOT NULL,
  "year" smallint NOT NULL,
  "results" jsonb
);

-- foreign keys
ALTER TABLE "drivers" ADD FOREIGN KEY ("team") REFERENCES "teams" ("id");
ALTER TABLE "user_belongs_to_group" ADD FOREIGN KEY ("user") REFERENCES "users" ("id");
ALTER TABLE "user_belongs_to_group" ADD FOREIGN KEY ("group") REFERENCES "groups" ("id");
ALTER TABLE "messages" ADD FOREIGN KEY ("user") REFERENCES "users" ("id");
ALTER TABLE "historical" ADD FOREIGN KEY ("circuit") REFERENCES "circuits" ("id");
ALTER TABLE "historical" ADD FOREIGN KEY ("driver") REFERENCES "drivers" ("id");
ALTER TABLE "next_results" ADD FOREIGN KEY ("circuit") REFERENCES "circuits" ("id");
ALTER TABLE "next_results" ADD FOREIGN KEY ("driver") REFERENCES "drivers" ("id");
ALTER TABLE "predictions" ADD FOREIGN KEY ("user") REFERENCES "users" ("id");
ALTER TABLE "predictions" ADD FOREIGN KEY ("circuit") REFERENCES "circuits" ("id");
