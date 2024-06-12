# The Adapter Pattern Explained with a Live JavaScript Example
The adapter pattern is a software design pattern that allows incompatible interfaces to work together seamlessly.
 It acts as a bridge between two objects by translating their method calls into a format that the other understands.

 Here's a breakdown of the key roles involved:

- **Target:** This defines the interface that the client code expects to use.
- **Adaptee:** This is the existing class with functionality we want to reuse, but it has an incompatible interface.
- **Adapter:** This is the new class that bridges the gap. It implements the target interface and delegates calls to the adaptee's methods.

 ## Live Example: Using Legacy Plugs with Modern Devices

 Imagine you have a collection of holiday lights with a vintage plug (the adaptee) that doesn't fit into modern power outlets (the target).
  To use these lights, you need an adapter:

        // Target Interface (Modern Outlet)
      interface PowerOutlet {
        turnOn(): void;
        turnOff(): void;
      }
      
      // Adaptee (Legacy Plug)
      class LegacyPlug {
        flipSwitch() {
          console.log("Legacy plug is flipped on!");
        }
      }
      
      // Adapter (Travel Adapter)
      class TravelAdapter implements PowerOutlet {
        constructor(private legacyPlug: LegacyPlug) {}
      
        turnOn() {
          this.legacyPlug.flipSwitch();
        }
      
        turnOff() {
          this.legacyPlug.flipSwitch(); // Simulate turning off by flipping again
        }
      }
      
      // Usage
      const legacyLights = new LegacyPlug();
      const adapter = new TravelAdapter(legacyLights);
      
      adapter.turnOn(); // Outputs: "Legacy plug is flipped on!"
      adapter.turnOff();  // Outputs: "Legacy plug is flipped on!" (simulated off)

  ## Explanation:
  - We define a PowerOutlet interface that represents the modern outlet, with turnOn and turnOff methods.
  - The LegacyPlug class represents the vintage plug with its own flipSwitch method.
  - The TravelAdapter implements the PowerOutlet interface. It takes a LegacyPlug in its constructor and acts as a bridge.
  - The adapter's turnOn and turnOff methods call the flipSwitch method on the legacy plug, effectively translating the modern outlet's commands to the legacy plug's functionality.
  - Now, we can use the adapter with code expecting a PowerOutlet. It turns on the legacy lights even though they have a different interface.

    ## Benefits of the Adapter Pattern:
    - **Increased reusability:** You can leverage existing code (the adaptee) with different interfaces.
    - **Improved maintainability:** Changes to the adaptee are isolated within the adapter, reducing the impact on client code.
    - **Flexibility:** You can create multiple adapters for different incompatible interfac
   
    ### When to Use the Adapter Pattern:
    - When you have existing code with valuable functionality but an incompatible interface.
    - When you want to integrate third-party libraries with different interfaces.
    - When you want to decouple client code from specific implementations.
      
    This is just a basic example, but the adapter pattern can be applied in various scenarios to promote flexible and maintainable code.

