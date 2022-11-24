public class UserAction extends DispatcherAction implements ModelDriver<User> {
	private User user=new User();
	private ObjectMapper mapper=new ObjectMapper();
	private UserDao userDao=new UserDao();
	@Override
	public User getModel() {
		return user;
	}

	public String userLogin(HttpServletRequest req,HttpServletResponse resp) 
			throws ServletException,IOException{
		Map<String,Object> json=new HashMap<String,Object>();
		User us = userDao.userLogin(user);
		if(null!=us) {
			json.put("code","1");
			json.put("msg", "登录成功");
		}else {
			json.put("code", "-1");
			json.put("msg", "用户名或密码错误");
		}
		
		mapper.writeValue(resp.getOutputStream(),json);
		return null;
	}
}