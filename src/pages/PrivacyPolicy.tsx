
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Shield, Lock, Check, Info } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-x-hidden">
      <Header />
      
      <div className="container mx-auto py-16 px-4 relative">
        <div className="absolute inset-0 cyber-grid opacity-30 z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-cyber-blue animate-pulse" />
            <h1 className="text-4xl font-orbitron font-bold text-white">Privacy Policy</h1>
          </div>
          
          <div className="cyber-card p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Info className="w-6 h-6 text-cyber-blue mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-orbitron mb-3">Introduction</h2>
                <p className="text-white/80 mb-4">
                  At nliveyourself, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
                <p className="text-white/80">
                  We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <FileText className="w-6 h-6 text-cyber-blue mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-orbitron mb-3">Information We Collect</h2>
                <p className="text-white/80 mb-4">
                  We may collect information about you in a variety of ways. The information we may collect via the Website includes:
                </p>
                <ul className="space-y-3 text-white/80 mb-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyber-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the Website or when you choose to participate in various activities related to the Website.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyber-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Website.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyber-blue mt-0.5 flex-shrink-0" />
                    <span><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Website.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <Lock className="w-6 h-6 text-cyber-blue mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-orbitron mb-3">How We Use Your Information</h2>
                <p className="text-white/80 mb-4">
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Website to:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyber-blue mt-0.5 flex-shrink-0" />
                    <span>Create and manage your account.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyber-blue mt-0.5 flex-shrink-0" />
                    <span>Process payments and refunds.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyber-blue mt-0.5 flex-shrink-0" />
                    <span>Send you email newsletters, alerts, and updates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyber-blue mt-0.5 flex-shrink-0" />
                    <span>Respond to your comments, questions, and requests.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cyber-blue mt-0.5 flex-shrink-0" />
                    <span>Deliver targeted advertising, coupons, newsletters, and other information.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="cyber-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-6 h-6 text-cyber-blue mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-orbitron mb-3">Security of Your Information</h2>
                <p className="text-white/80 mb-4">
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-cyber-blue mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-orbitron mb-3">Contact Us</h2>
                <p className="text-white/80">
                  If you have questions or comments about this Privacy Policy, please contact us at: privacy@nliveyourself.com
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 text-white/60">
            <p>Last Updated: June 30, 2023</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
