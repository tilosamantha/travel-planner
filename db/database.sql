CREATE DATABASE travel_planner;

\c travel_planner;

CREATE TABLE stuff(
  stuff_id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  link VARCHAR,
  description VARCHAR
);

INSERT INTO stuff (title, link, description) VALUES ('Paris Catacombs', 'https://www.catacombes.paris.fr/en', 'Underground ossuaries in Paris, France.');

INSERT INTO stuff (title, link, description) VALUES ('Big Ben', 'https://www.parliament.uk/about/living-heritage/building/palace/big-ben/', 'Big clock tower in London, England');

INSERT INTO stuff (title, link, description) VALUES ('St Peters Basilica', 'https://www.britannica.com/topic/Saint-Peters-Basilica', 'Vatican city church built in 1626');