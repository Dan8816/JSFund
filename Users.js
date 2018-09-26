users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]

  function userLanguages(users)
  {
      var userslang = "";//empty string to build the sentence
      for (var i = 0; i<users.length; i++)//iterates through the array of users
      {
          userslang += users[i].fname + " " + users[i].lname + " knows "//adds each users f+l name each iteration of i
          for(var j = 0; j<users[i].languages.length-1; j++)//iterates through i users array of languages
          {
              if (j < users[i].languages.length-1)//bool to add 1st thru 2nd to last lang + a comma delimitation for the list
              {
                  userslang += users[i].languages[j];
                  userslang += ", ";
              }
              else//boo to cath the last lang
              {
                  userslang += "and "//add and to before the last lang
                  userslang += users[i].languages[j]//add the last lang
                  userslang += ". " + "\n"//add the period plus a break to next line to start the next iteration of i users
              }
          }
      }
      return userslang;//final string return
  }

  console.log(userLanguages(users));