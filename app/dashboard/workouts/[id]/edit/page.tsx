import Form from '@/app/ui/workouts/edit-form';
import Breadcrumbs from '@/app/ui/workouts/breadcrumbs';
import { fetchWorkoutById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [invoice, customers] = await Promise.all([
        fetchWorkoutById(id),
        fetchCustomers(),
    ]);
    if (!invoice) {
        notFound();
    }
    return (
        <main>
        <Breadcrumbs
            breadcrumbs={[
            { label: 'Workouts', href: '/dashboard/workoouts' },
            {
                label: 'Edit Workout',
                href: `/dashboard/workouts/${id}/edit`,
                active: true,
            },
            ]}
        />
        <Form invoice={invoice} customers={customers} />
        </main>
    );
}