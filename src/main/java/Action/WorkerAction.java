package Action;

import Dao.MybatisUtils;
import Entity.Worker;
import Service.IWorker;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.ibatis.session.SqlSession;
import org.apache.struts2.interceptor.ServletRequestAware;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by songsong on 2018/3/22.
 */
public class WorkerAction extends ActionSupport implements ServletRequestAware {
    private SqlSession s= MybatisUtils.getSqlSession();
    private IWorker dao=s.getMapper(IWorker.class);
    private HttpServletRequest request;
    private List<Worker> workers;

    public List<Worker> getWorkers() {
        return workers;
    }

    public void setServletRequest(HttpServletRequest httpServletRequest) {
        request=httpServletRequest;
    }

    public String init(){
        workers=dao.getWorkers(new Worker());
        return SUCCESS;
    }
    public String query(){
        workers=dao.getWorkers(new Worker());
        return SUCCESS;
    }
}
