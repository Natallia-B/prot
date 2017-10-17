describe('pi homepage', function() {
  it('should have a title', function() {
    return browser.get('http://next.primary-intel.com/')

     .then(function () {
       return expect(browser.getTitle()).toEqual('TruVoice');
     }) 

  });
  it('should log in to dashboard', function() {
    return element(by.id('username_id')).sendKeys('rallen@primary-intel.com')
     .then(function () {
      return element(by.id('password_id')).sendKeys('mega plex 17');
    }) 
     .then(function () {
      return element(by.xpath('.//*[@id="signin-form_id"]/button')).click();
    }) 
    .then(function () {
      return expect(browser.getTitle()).toEqual('Dashboard | TruVoice');
    })
  });


});