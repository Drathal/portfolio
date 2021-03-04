dojo.provide("efs.components.base_controller");
dojo.declare("efs.components.base_controller", null,
{
  options : {},

  constructor: function(options)
  {
    this.options=options;
  },
  
  test: function()
  {
    console.log("base_controller::test");
  },
  
  get: function(name)
  {
    if(this.options[name])
      return this.options[name];
    else
      return null;
  },
  
  preDispatch: function() {
  },
  
  postDispatch: function() {
  },
  
  _forward: function(action,controller,params)
  {
    dojo.require(controller);
    eval("var obj = new "+controller+"(dojo.delegate(params,this.options));");
    eval("obj.preDispatch();");
    eval("obj."+action+"();");
    eval("obj.postDispatch();");
  },
  
  setOptions: function(options)
  {
    this.options=options;
  }
});
