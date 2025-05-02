async function analyzeQueryPerformance(query) {
  const result = await query.explain('executionStats');
  console.log(JSON.stringify(result, null, 2));
}

// Örnek kullanım
const query = Message.find({ channelName: 'general' });
analyzeQueryPerformance(query);