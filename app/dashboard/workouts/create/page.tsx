import Form from '@/app/ui/workouts/create-form';
import Breadcrumbs from '@/app/ui/workouts/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Workouts', href: '/dashboard/workouts' },
          {
            label: 'Create Workout',
            href: '/dashboard/workouts/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}