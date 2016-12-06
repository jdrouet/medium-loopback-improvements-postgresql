create table account (
  id serial not null primary key,
  name text not null,
  email text unique not null
);

create table invoice (
  id serial not null primary key,
  number integer not null,
  title text,
  createdat date not null default now(),
  ownerid integer not null
    references account(id) on delete cascade,
  clientid integer not null
    references account(id) on delete cascade
);

create table invoiceitem (
  id serial not null primary key,
  name text not null,
  description text not null,
  quantity float not null,
  price float not null,
  invoiceid integer not null
    references invoice(id) on delete cascade
);
