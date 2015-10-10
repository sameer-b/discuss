# Discuss  
Simple discussion forum API.  
It supports Posting Threads and Posting Comments.  

Routes:
* /getThread/:id  
Gets thread with specified id
* /getComment/:id  
Gets comment related to specified thread id
* /getAllThreads  
Gets all threads 
* /newThread  
Post a new thread post parameters: author, title, body  
* /newComment  
Post a new comment post parameters: id= thread id, author, title, body
