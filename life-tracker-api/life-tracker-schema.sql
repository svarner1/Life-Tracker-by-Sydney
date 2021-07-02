CREATE TABLE users (
  id                SERIAL PRIMARY KEY,
  first_name        TEXT NOT NULL,
  last_name         TEXT NOT NULL,
  password          TEXT NOT NULL,
  username          TEXT NOT NULL UNIQUE,
  email             TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  -- unsure if I'll need these:
  is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
  created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE exercise_activity (
  exercise_item_id  SERIAL PRIMARY KEY,
  users_id          INTEGER NOT NULL,
  duration          INTEGER NOT NULL,
  name              TEXT NOT NULL,
  intensity         INTEGER NOT NULL,
  FOREIGN KEY(users_id) REFERENCES users(id)
);


CREATE TABLE sleep_entry (
  sleep_entry_id        SERIAL PRIMARY KEY,
  users_id              INTEGER NOT NULL,
  beginning_date        DATE NOT NULL,
  ending_date           DATE NOT NULL,
  beginning_time        TIME NOT NULL,
  ending_time           TIME NOT NULL,
  duration              INTEGER NOT NULL,    
  FOREIGN KEY (users_id) REFERENCES users(id)       
);


CREATE TABLE nutrition_item (
  nutrition_item_id     SERIAL PRIMARY KEY,
  users_id                    INTEGER NOT NULL,
  food                  TEXT NOT NULL,
  category              TEXT NOT NULL,
  quantity              INTEGER NOT NULL,
  calories              INTEGER NOT NULL,
  image                 TEXT NOT NULL,
  FOREIGN KEY (users_id) REFERENCES users(id)
);

-- CREATE TABLE  logged_nutrition (
--   logged_nutrition_id    SERIAL PRIMARY KEY,
--   users_id                    INTEGER NOT NUll,
--   calories              INTEGER NOT NULL,
--   FOREIGN KEY(users_id) REFERENCES users(id)
-- );

-- CREATE TABLE logged_exercise (
--   logged_exercise_id    SERIAL PRIMARY KEY,
--   users_id                    INTEGER NOT NULL,
--   total_minutes         INTEGER NOT NULL,   
--   FOREIGN KEY (users_id) REFERENCES users(id)                                 
-- );

--   FOREIGN KEY(customer_id) REFERENCES users(id)
-- CREATE TABLE logged_sleep (
--   logged_sleep_id        SERIAL PRIMARY KEY,
--   users_id                    INTEGER NOT NULL,
--   total_duration        INTEGER NOT NULL,
--   FOREIGN KEY(users_id) REFERENCES users(id)
-- );
