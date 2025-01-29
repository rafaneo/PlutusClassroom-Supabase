insert into public.quiz_sets
    (id, name, description)
    values ('ae53ca2c-c7f4-4b31-8b71-51fab618a74f', 'Money Basics', 'A quiz to test your knowledge on the basics of money');


select
  add_question (
    quiz_set_id => 'ae53ca2c-c7f4-4b31-8b71-51fab618a74f'::uuid,
    body => 'What is money?'::text,
    "order" => 0,
    choices => array[
      '{"body": "A type of food", "is_correct": false}'::json,
      '{"body": "A medium of exchange for goods and services", "is_correct": true}'::json,
      '{"body": "A type of technology", "is_correct": false}'::json,
      '{"body": "A place to store things", "is_correct": false}'::json
    ]
  );

select
  add_question (
    quiz_set_id => 'ae53ca2c-c7f4-4b31-8b71-51fab618a74f'::uuid,
    body => 'What does it mean to save money?'::text,
    "order" => 1,
    choices => array[
      '{"body": "Spending all your money on fun things", "is_correct": false}'::json,
      '{"body": "Keeping some money aside for future needs", "is_correct": true}'::json,
      '{"body": "Giving all your money to a friend", "is_correct": false}'::json,
      '{"body": "Hiding money under your bed", "is_correct": false}'::json
    ]
  );

select
  add_question (
    quiz_set_id => 'ae53ca2c-c7f4-4b31-8b71-51fab618a74f'::uuid,
    body => 'Which of these is a basic need?'::text,
    "order" => 2,
    choices => array[
      '{"body": "Video Game", "is_correct": false}'::json,
      '{"body": "Food and Water", "is_correct": true}'::json,
      '{"body": "A luxury car", "is_correct": false}'::json,
      '{"body": "Fancy clothes", "is_correct": false}'::json
    ]
  );

select
  add_question (
    quiz_set_id => 'ae53ca2c-c7f4-4b31-8b71-51fab618a74f'::uuid,
    body => 'If you have $10 and spend 50%, how much money is left?'::text,
    "order" => 3,
    choices => array[
      '{"body": "€5", "is_correct": true}'::json,
      '{"body": "€4", "is_correct": false}'::json,
      '{"body": "€2", "is_correct": false}'::json,
      '{"body": "€0", "is_correct": false}'::json
    ]
  );

select
  add_question (
    quiz_set_id => 'ae53ca2c-c7f4-4b31-8b71-51fab618a74f'::uuid,
    body => 'What is a piggy bank used for?'::text,
    "order" => 4,
    choices => array[
      '{"body": "To buy a big", "is_correct": false}'::json,
      '{"body": "To store coins and savings", "is_correct": true}'::json,
      '{"body": "To decorate your room", "is_correct": false}'::json,
      '{"body": "To keep toys", "is_correct": false}'::json
    ]
  );





insert into public.quiz_sets
    (id, name, description)
    values ('336b107d-ba56-410c-add1-680c57ac11e7', 'Building Smart Financial Habits', 'A quiz to test your knowledge on building smart financial habits');



select
  add_question (
    quiz_set_id => '336b107d-ba56-410c-add1-680c57ac11e7'::uuid,
    body => 'What is interest on a savings account?'::text,
    "order" => 0,
    choices => array[
      '{"body": "The money you pay to the bank for using their services", "is_correct": false}'::json,
      '{"body": "A fee for depositing money", "is_correct": false}'::json,
      '{"body": "A loan from the bank", "is_correct": false}'::json,
      '{"body": "The extra money the bank pays you for keeping your savings with them", "is_correct": true}'::json
    ]
  );

select
  add_question (
    quiz_set_id => '336b107d-ba56-410c-add1-680c57ac11e7'::uuid,
    body => 'What does a budget help you do?'::text,
    "order" => 1,
    choices => array[
      '{"body": "Spend as much money as you want", "is_correct": true}'::json,
      '{"body": "Get free money", "is_correct": false}'::json,
      '{"body": "Avoid saving money", "is_correct": false}'::json,
      '{"body": "Plan and control your income and expenses", "is_correct": true}'::json
    ]
  );

select
  add_question (
    quiz_set_id => '336b107d-ba56-410c-add1-680c57ac11e7'::uuid,
    body => 'What is a loan?'::text,
    "order" => 2,
    choices => array[
      '{"body": "A type of insurance", "is_correct": false}'::json,
      '{"body": "A gift from the bank", "is_correct": false}'::json,
      '{"body": "Free money", "is_correct": false}'::json,
      '{"body": "Money borrowed that must be paid back with or without interest", "is_correct": true}'::json
    ]
  );

select
  add_question (
    quiz_set_id => '336b107d-ba56-410c-add1-680c57ac11e7'::uuid,
    body => 'If you earn €50 per week and save $10 each week, how much will you save in 5 weeks?'::text,
    "order" => 3,
    choices => array[
      '{"body": "€100", "is_correct": false}'::json,
      '{"body": "€200", "is_correct": false}'::json,
      '{"body": "€50", "is_correct": true}'::json,
      '{"body": "€25", "is_correct": false}'::json
    ]
  );

select
  add_question (
    quiz_set_id => '336b107d-ba56-410c-add1-680c57ac11e7'::uuid,
    body => 'Which is the safest way to store large amounts of money?'::text,
    "order" => 4,
    choices => array[
      '{"body": "In a piggy bank", "is_correct": false}'::json,
      '{"body": "In a bank account", "is_correct": false}'::json,
      '{"body": "In your wallet", "is_correct": true}'::json
    ]
  );