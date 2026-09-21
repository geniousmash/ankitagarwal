document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      mobileBtn.innerHTML = isExpanded ? '✕' : '☰';
      mobileBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileBtn.innerHTML = '☰';
      });
    });
  }

  // 3. Consultation Booking Modal
  const modal = document.getElementById('consultationModal');
  const openButtons = document.querySelectorAll('.open-consultation-modal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const consultationForm = document.getElementById('consultationForm');

  const openModal = (defaultService = '') => {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (defaultService) {
        const serviceSelect = document.getElementById('consultationService');
        if (serviceSelect) serviceSelect.value = defaultService;
      }
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || '';
      openModal(service);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // 4. Consultation Form Submission (with WhatsApp fallback option)
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName')?.value || 'Client';
      const phone = document.getElementById('clientPhone')?.value || '';
      const email = document.getElementById('clientEmail')?.value || '';
      const service = document.getElementById('consultationService')?.value || 'General Advisory';
      const notes = document.getElementById('clientNotes')?.value || 'None';

      const submitBtn = consultationForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Booking Consultation...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        closeModal();
        consultationForm.reset();
        showToast(`Thank you, ${name}! Your consultation request for ${service} has been received. We will contact you at ${phone || email} within 2 business hours.`);
      }, 900);
    });
  }

  // 5. WhatsApp Direct Quick Connect
  const whatsappSubmitBtn = document.getElementById('submitViaWhatsApp');
  if (whatsappSubmitBtn) {
    whatsappSubmitBtn.addEventListener('click', () => {
      const name = document.getElementById('clientName')?.value || 'Prospective Client';
      const phone = document.getElementById('clientPhone')?.value || 'N/A';
      const service = document.getElementById('consultationService')?.value || 'General Consultation';
      const notes = document.getElementById('clientNotes')?.value || '';

      const text = `Hello CA Ankit Agrawal,\n\nI would like to request a consultation:\n• *Name:* ${name}\n• *Phone:* ${phone}\n• *Service Needed:* ${service}\n• *Requirement:* ${notes}\n\nPlease let me know your availability.`;
      const encoded = encodeURIComponent(text);
      // Opens WhatsApp click-to-chat
      window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank');
      closeModal();
    });
  }

  // 6. Newsletter Subscription
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;
      showToast(`Thank you! You're subscribed to CA Ankit Agrawal's monthly tax briefings (${email}).`);
      newsletterForm.reset();
    });
  }

  // 7. Toast Notification Handler
  function showToast(message) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalToast';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>💼</span> <span>${message}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  }
});
