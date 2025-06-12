// Script.js - Main JavaScript file for Securonis Linux Website

document.addEventListener('DOMContentLoaded', function() {
    // SHA1 Checksum Box Functionality
    const checksumButton = document.querySelector('.show-checksum-btn');
    const checksumBox = document.querySelector('.checksum-box');
    const closeChecksumBtn = document.querySelector('.close-checksum');
    const copyChecksumBtn = document.querySelector('.copy-checksum');
    const checksumText = document.querySelector('.checksum-text');
    
    if (checksumButton && checksumBox) {
        checksumButton.addEventListener('click', function() {
            checksumBox.classList.add('active');
        });
    }
    
    if (closeChecksumBtn) {
        closeChecksumBtn.addEventListener('click', function() {
            checksumBox.classList.remove('active');
        });
    }
    
    if (copyChecksumBtn && checksumText) {
        copyChecksumBtn.addEventListener('click', function() {
            const checksumValue = checksumText.textContent;
            navigator.clipboard.writeText(checksumValue)
                .then(() => {
                    // Show copy success message
                    const successMessage = document.createElement('span');
                    successMessage.className = 'copy-message';
                    successMessage.textContent = 'Copied!';
                    copyChecksumBtn.appendChild(successMessage);
                    
                    setTimeout(() => {
                        successMessage.remove();
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy checksum: ', err);
                });
        });
    }
    // Download Tabs Functionality
    const tabLinks = document.querySelectorAll('.download-tab-link');
    const tabContents = document.querySelectorAll('.download-tab-content');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all tabs and contents
            tabLinks.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to current tab
            this.classList.add('active');
            
            // Show the corresponding content
            const targetId = this.getAttribute('data-tab');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Copy to clipboard functionality for donation addresses
    const copyButtons = document.querySelectorAll('.copy-btn, .mini-copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentNode.querySelector('input');
            const successMessage = this.parentNode.querySelector('.copy-success');
            
            // Select the text
            input.select();
            input.setSelectionRange(0, 99999); // For mobile devices
            
            // Copy the text without showing any notification
            navigator.clipboard.writeText(input.value)
                .then(() => {
                    // Do nothing, no notification
                })

                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        });
    });

    // Accordion functionality for other cryptocurrencies
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // Newsletter form submission (placeholder functionality)
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                // Here you would typically send this to your backend
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
});
