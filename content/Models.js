$(function($){
  window.Models = {};
  
  var Message = window.Models.Message = Spine.Model.setup('Message', ['type', 'timestamp', 'nick', 'text']);
  Message.include({
  
    date: function() {
      var d = !this.timestamp ? new Date() :
        (this.timestamp instanceof Date) === false ? new Date(this.timestamp) :
        this.timestamp;
      
      return $.timeString(d);
    }
  
  });
  
  
  
  var User = window.Models.User = Spine.Model.setup('User', ['id', 'nick']);
  User.extend({
    
  });
  
  
  
  
  var Status = window.Models.Status = Spine.Model.setup('Status', ['users', 'starttime', 'rss']);
  Status.include({
    
    userCount: function() {
      return this.users.length;
    },
    
    uptime: function() {
      return $.relativeTime(this.starttime);
    }
    
  });
  Status.extend({
    
  });
  
});