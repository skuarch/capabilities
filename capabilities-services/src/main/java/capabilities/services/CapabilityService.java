package capabilities.services;


import capabilities.model.entity.Capability;
import capabilities.model.repository.CapabilityRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CapabilityService {
    
    @Autowired
    private CapabilityRepository capabilityRepository;
    
    public Capability getCapability(long id) {
        return capabilityRepository.findOne(id);
    }

    public Capability saveCapability(Capability capability) {
        
        if(capability == null) {
            throw new IllegalArgumentException("capability is null or empty");
        }
        
        if(capability.getName() == null || capability.getName().trim().length() < 1) {
            throw new IllegalArgumentException("capability name is null or empty");
        }
        
        if(capability.getUrl() == null || capability.getUrl().trim().length() < 1) {
            throw new IllegalArgumentException("capability url is null or empty");
        }
        
        
        return capabilityRepository.save(capability);
    }
    
    
    public Capability updateCapability(Capability capability) {
        
        if(capability == null) {
            throw new IllegalArgumentException("capability is null or empty");
        }
        
        if(capability.getId() < 1) {
            throw new IllegalArgumentException("capability id is less than 1");
        }
        
        if(!capabilityRepository.exists(capability.getId())){
        	throw new IllegalArgumentException("capability doesn't exits");
        }
        
        if(capability.getName() == null || capability.getName().trim().length() < 1) {
            throw new IllegalArgumentException("capability name is null or empty");
        }
        
        if(capability.getUrl() == null || capability.getUrl().trim().length() < 1) {
            throw new IllegalArgumentException("capability url is null or empty");
        }
        
        
        return capabilityRepository.save(capability);
        
    }
    
    public List<Capability> getCapabilities(){
    	return capabilityRepository.getCapabilities();
    }
    
}
