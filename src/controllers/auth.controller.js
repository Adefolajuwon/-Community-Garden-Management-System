async function controllerAuthGoogle(req, res) {
	try {
		if (!req.isAuthenticated()) {
			res.status(200).json({ error: 'user not authenticated' });
		}
		req.session.profile = req.user;
		const { email, provider } = req.user;
		const user = await User.findOne;
	} catch (error) {}
}
