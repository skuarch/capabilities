package capabilities.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import capabilities.model.entity.Capability;
import capabilities.services.CapabilityService;

@RestController
@RequestMapping("/capabilities")
public class CapabilityController {
    
    @Autowired    
    private CapabilityService capabilityService;

    @ResponseBody
    @GetMapping("/{id}")    
    public Capability get(@PathVariable("id") long id) {
        return capabilityService.getCapability(id);
    }
    
    @ResponseBody
    @GetMapping    
    public List<Capability> get() {
        return capabilityService.getCapabilities();
    }

    @PostMapping
    @ResponseBody
    public ResponseEntity<?> post(@RequestBody Capability capability) {	 
        	return ResponseEntity
        			.ok(capabilityService.saveCapability(capability)); 
    }
	
    @PutMapping
    @ResponseBody
    public Capability put(@RequestBody Capability capability) {
        return capabilityService.updateCapability(capability);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") long id) {
    }

}
