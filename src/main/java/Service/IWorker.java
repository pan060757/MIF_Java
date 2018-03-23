package Service;

import Entity.Worker;

import java.util.List;

/**
 * Created by songsong on 2018/3/22.
 */
public interface IWorker {
    List<Worker> getWorkers(Worker condition);
}
