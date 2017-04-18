package capabilities.model.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import capabilities.model.entity.Capability;

@Repository
public interface CapabilityRepository extends CrudRepository<Capability,Long> {
	
	
	List<Capability> getCapabilities();
    
}
