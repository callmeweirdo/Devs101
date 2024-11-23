import { clerkClient } from '@clerk/clerk-expo';

export default async function handler(req, res) {
  try {
    // Example query; replace `userIds` with your actual filter criteria
    const { data } = await (await clerkClient()).users.getUserList({
      emailAddress: req.query.userIds || [], // Replace with your filter condition
    });

    // Map the response to a usable format
    const users = data?.map(user => ({
      id: user.id,
      name: `${user.firstName || ''} ${user.lastName || ''}`,
      email: user.emailAddresses[0]?.emailAddress || 'N/A',
      avatar: user.profileImageUrl || 'https://via.placeholder.com/250',
    }));

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}