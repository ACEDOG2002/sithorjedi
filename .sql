create or replace function increment_vote(row_side text)
returns void as $$
update votes
set count = count + 1
where side = row_side;
$$ language sql;