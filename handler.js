module.exports.hello = async (event) => {

  console.log(JSON.stringify({event}))

  if  (event.Records[0].Sns.Message == "erro") {
    throw new Error('retry')
  }

  return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
