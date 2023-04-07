const { db, JobApplications } = require('../server/db')

const seed = async () => {
  await db.sync({ force: true })

  const Amazon = await JobApplications.create({
    CompanyName: 'amazon', 
    URLofJobPosting: 'amazoncom', 
    URLofApplication: 'amazoncom', 
    ResumeSubmitted: 'loremIpsum', 
    MyPitch:'loremipsum', 
    Notes: 'loremipsum', 
    JobTitle: 'Junior Dev', 
    ContactedforInterview: 'loremipsum'
  })

  const TacoBell = await JobApplications.create({
    CompanyName: 'TacoBell', 
    URLofJobPosting: 'TacoBellcom', 
    URLofApplication: 'TacoBellcom', 
    ResumeSubmitted: 'loremIpsum', 
    MyPitch:'loremipsum', 
    Notes: 'loremipsum', 
    JobTitle: 'Junior Dev', 
    ContactedforInterview: 'loremipsum'
  })


  db.close()
  console.log(`

    Seeding successful!
    Time to Manage Students and Applications!

  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})

