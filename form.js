class Form{
 constructor(){
  this.next=createButton('Next')
  this.feedBack=createElement('h1')
  this.name=createInput('Name')
  this.class=createInput('Class')
  this.sec=createInput('Section')
  this.adno=createInput('Admition number')
  
  this.maths=createElement('h2')
  this.tmaths=createInput('Teacher name')
  this.tmfeed=createInput('Feed back')
  this.msug=createInput('Suggestion')
  this.next1=createButton('Next')
  
  this.english=createElement('h2')
  this.tenglish=createInput('Teacher name')
  this.tefeed=createInput('Feed back')
  this.esug=createInput('Suggestion')
  this.next2=createButton('Next')
  
  this.science=createElement('h2')
  this.tscience=createInput('Teacher name')
  this.tsfeed=createInput('Feed back')
  this.ssug=createInput('Suggestion')
  this.next3=createButton('Next')
 
  this.sst=createElement('h2')
  this.tsst=createInput('Teacher name')
  this.tsstfeed=createInput('Feed back')
  this.sstsug=createInput('Suggestion')
  this.next4=createButton('Next')

  this.thanks=createElement('h1')
 }
 display(){
  this.feedBack.html("Feed back")
  stroke("white")
  this.feedBack.position(660,50)
  this.name.position(650,150)
  this.class.position(650,250)
  this.sec.position(650,350)
  this.adno.position(650,450)
  this.next.position(700,550)
  
  this.next.mousePressed(()=>{
   this.feedBack.hide()
   this.name.hide()
   this.class.hide()
   this.class.hide()
   this.sec.hide()
   this.adno.hide()
   this.next.hide()
   
   this.maths.html("Maths")
   this.maths.position(660,50)
   this.tmaths.position(650,200)
   this.tmfeed.position(650,350)
   this.msug.position(650,500)
   this.next1.position(700,650)
  
   this.next1.mousePressed(()=>{
    this.maths.hide()
    this.tmaths.hide()
    this.tmfeed.hide()
    this.msug.hide()
    this.next1.hide()

    this.english.html("English")
    this.english.position(660,50)
    this.tenglish.position(650,200)
    this.tefeed.position(650,350)
    this.esug.position(650,500)
    this.next2.position(700,650)

    this.next2.mousePressed(()=>{
     this.english.hide()
     this.tenglish.hide()
     this.tefeed.hide()
     this.esug.hide()
     this.next2.hide()

     this.science.html("Science")
     this.science.position(660,50)
     this.tscience.position(650,200)
     this.tsfeed.position(650,350)
     this.ssug.position(650,500)
     this.next3.position(700,650)

     this.next3.mousePressed(()=>{
      this.science.hide()
      this.tscience.hide()
      this.tsfeed.hide()
      this.ssug.hide()
      this.next3.hide()

      this.sst.html("Social Science")
      this.sst.position(660,50)
      this.tsst.position(650,200)
      this.tsstfeed.position(650,350)
      this.sstsug.position(650,500)
      this.next4.position(700,650)

      this.next4.mousePressed(()=>{
       this.sst.hide()
       this.tsst.hide()
       this.tsstfeed.hide()
       this.sstsug.hide()
       this.next4.hide()

       this.thanks.position(650,350)
       this.thanks.html("Thank you")
      })
     })
    }) 
   }) 
  })
 }
}