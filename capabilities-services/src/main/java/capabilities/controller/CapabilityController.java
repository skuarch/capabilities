package capabilities.controller;


import capabilities.model.entity.Capability;
import capabilities.services.CapabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/capabilities")
public class CapabilityController {
    
    @Autowired    
    private CapabilityService capabilityService;

    @GetMapping("/{id}")
    public Capability get(@PathVariable("id") long id) {
        return null;
    }

    @PostMapping
    public Capability post(@ModelAttribute Capability capability) {
        return capabilityService.saveCapability(capability);
    }

    @PutMapping
    public Capability put(@RequestBody Capability capability) {
        return null;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") long id) {
    }

}
