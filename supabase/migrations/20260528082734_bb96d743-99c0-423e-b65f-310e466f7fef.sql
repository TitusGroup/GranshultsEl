
insert into storage.buckets (id, name, public)
values ('quote-uploads', 'quote-uploads', true)
on conflict (id) do nothing;

-- Allow anyone (anonymous visitors) to upload to this bucket so contact-form attachments work without login
create policy "Public can upload quote attachments"
on storage.objects for insert
to anon, authenticated
with check (bucket_id = 'quote-uploads');

-- Allow public read so the owner can open the link from their email
create policy "Public can read quote attachments"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'quote-uploads');
