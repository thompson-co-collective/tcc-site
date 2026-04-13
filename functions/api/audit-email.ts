import { validateEmail } from './utils';

export function auditEmailHandler(req, res) {
    const { email } = req.body;

    // Validate email
    if (!validateEmail(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    // Send email logic here...
    res.status(200).json({ success: true, message: 'Email submitted successfully.' });
}