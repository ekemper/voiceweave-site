import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Form schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  organization: z.string().min(2, { message: "Please enter your organization name" }),
  organizationType: z.string().min(1, { message: "Please select your organization type" }),
  interests: z.array(z.string()).min(1, { message: "Please select at least one interest" }),
});

type FormValues = z.infer<typeof formSchema>;

const interestOptions = [
  { id: "grantWriting", label: "Grant Writing Assistance" },
  { id: "opportunities", label: "Finding Grant Opportunities" },
  { id: "impact", label: "Impact Measurement" },
  { id: "collaboration", label: "Team Collaboration" },
];

export default function WaitlistForm() {
  const { ref: refSection, inView: inViewSection } = useScrollAnimation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      organization: "",
      organizationType: "",
      interests: [],
    },
  });

  const { formState } = form;
  const isLoading = formState.isSubmitting;

  async function onSubmit(data: FormValues) {
    try {
      // In a real application, you would submit this data to an API
      console.log("Form submitted:", data);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your form.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="join-waitlist" className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative">
      <div className="absolute inset-0 bg-wave-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={refSection}
          className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${
            inViewSection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Join the VoiceWeave Waitlist</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">Be the first to access our platform when we launch. Limited spots available for our beta program.</p>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-xl p-6 md:p-8 shadow-xl">
          {!isSubmitted ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-700 font-medium">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Your name" 
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-700 font-medium">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email" 
                          placeholder="you@organization.org" 
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-700 font-medium">Organization Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Your organization" 
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="organizationType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-700 font-medium">Organization Type</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="nonprofit">Nonprofit 501(c)(3)</SelectItem>
                          <SelectItem value="educational">Educational Institution</SelectItem>
                          <SelectItem value="government">Government Agency</SelectItem>
                          <SelectItem value="foundation">Foundation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="interests"
                  render={() => (
                    <FormItem>
                      <div className="mb-1">
                        <FormLabel className="text-neutral-700 font-medium">Interested In</FormLabel>
                      </div>
                      <div className="space-y-2">
                        {interestOptions.map((option) => (
                          <FormField
                            key={option.id}
                            control={form.control}
                            name="interests"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={option.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(option.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, option.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== option.id
                                              )
                                            )
                                      }}
                                      className="w-5 h-5 text-primary-500 rounded focus:ring-primary-500"
                                    />
                                  </FormControl>
                                  <FormLabel className="text-neutral-700">
                                    {option.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    {isLoading ? "Processing..." : "Join Waitlist"}
                  </Button>
                  <p className="text-neutral-500 text-sm mt-4 text-center">
                    By submitting, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </div>
              </form>
            </Form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-check-line text-3xl text-green-500"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-800">Thank You!</h3>
              <p className="text-neutral-600 mb-6">You've been added to our waitlist. We'll notify you when VoiceWeave launches.</p>
              <p className="text-primary-500 font-medium">Keep an eye on your inbox!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
