exports.processPayment = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ msg: "Invalid amount" });
    }

    // Simulate payment success
    const transactionId = "TXN" + Date.now();

    res.json({
      status: "success",
      transactionId,
      amount,
    });
  } catch (err) {
    res.status(500).send("Server error");
  }
};