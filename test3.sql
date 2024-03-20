create table customer (
	id int not null auto_increment,
    name varchar(150),
    default_language varchar(2),
    status smallint(1),
    PRIMARY KEY (id)
);

create table user(
	id int not null auto_increment,
    name varchar(150),
    mobile bigint,
    birtdate date,
    email varchar(150),
    password varchar(150),
    status smallint(1),
    PRIMARY KEY (id)
);

create table user_customer (
	id int not null auto_increment,
    user_id int,
	customer_id int,
    PRIMARY KEY (id),
    foreign key (customer_id) references customer(id),
    foreign key (user_id) references user(id)
);

select customer.name, user_customer.customer_id, customer.id, user.name, user.status, customer.status
from customer 
join user_customer on customer.id = user_customer.customer_id
join user on user_customer.user_id = user.id 
where datediff(curdate(),user.birthdate)/365 >= 18 and user.status =1 and customer.status =1
order by user.name;