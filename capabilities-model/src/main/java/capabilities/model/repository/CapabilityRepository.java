package capabilities.model.repository;

import capabilities.model.entity.Capability;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CapabilityRepository extends CrudRepository<Capability,Long> {
    
}
