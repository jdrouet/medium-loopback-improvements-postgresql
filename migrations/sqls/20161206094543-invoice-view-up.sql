create view invoicesubview as
select
  invoiceitem.invoiceid as id,
  json_agg(invoiceitem) as items,
  sum(invoiceitem.price * invoiceitem.quantity) as total
from invoiceitem
group by invoiceitem.invoiceid;

create view invoiceview as
select
  invoice.*,
  to_json(owner.*) as owner,
  to_json(client.*) as client,
  invoicesubview.items,
  invoicesubview.total
from invoice
join account as owner on owner.id = invoice.ownerid
join account as client on client.id = invoice.clientid
join invoicesubview on invoicesubview.id = invoice.id;
