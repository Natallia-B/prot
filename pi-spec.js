describe('pi homepage', function() {
  let loginButton = element(by.xpath('.//*[@id="signin-form_id"]/button'));

  function xpClick (a) {
    return element(by.xpath(a)).click()
    
  }

  beforeAll(function() {
    browser.get('http://next.primary-intel.com/');
  });

  it('should have a title', function() {
    return expect(browser.getTitle()).toEqual('TruVoice');

  });

  it('should log in to dashboard', function() {
    return element(by.id('username_id')).sendKeys('rallen@primary-intel.com')
     .then(function () {
      return element(by.id('password_id')).sendKeys('mega plex 17');
    }) 
     .then(function () {
      return loginButton.click();
    }) 
    .then(function () {
      return expect(browser.getTitle()).toEqual('Dashboard | TruVoice');
    })
  });

  it('should navigate to Sample', function() {
    return Promise.resolve()
    .then(()=>{
      return element(by.id('menu-trigger')).click();
    })
    .then(function () {
      return xpClick('.//*[@id="sidebar"]/div[1]/ul/li[2]/a');
    }) 
    .then(function () {
      return xpClick('.//*[@id="sidebar"]/div[1]/ul/li[2]/ul/li[1]/a');
    }) 
    
    // .then(()=>{
    //   return expect(browser.getTitle()).toEqual('Sample | TruVoice');
    // })

  });

  it('should open Add Sample', function() {
    return Promise.resolve()
    .then(()=>{
      return xpClick('.//*[@id="research-sample-header"]/ul/li[2]/a');
    })

    .then(()=>{
      return expect(browser.getTitle()).toEqual('Add Opportunity | TruVoice');
    })
  });

});
